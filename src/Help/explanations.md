# Redux Explained

## TLDR
- Store erstellen, enthält alle Slices
- Slice erstellen, enthält State und die Actions
- State und Actions in Komponenten importieren und verwenden

## Store

- Der Store enthält all deine Slices bzw. den gesamten state deiner Applikation
- Diesen store geben wir der Provider Komponente, die wir von react-redux importieren, als Property mit und legen unsere App innerhalb der Provider Komponente.
- Mithilfe der Context API von React können wir so, überall in unserer App auf den store zugreifen.

```js
const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
  },
})
```

## Reducer Property im Store

- Um einen store zu erstellen, können wir die "configureStore" function von reduxjs/toolkit benutzen
- Dieser geben wir ein object mit einer "reducer" property.
- Dieses reducer object enthält key value pairs, wo der key zum slice zeigt und der value die reducer function vom state ist.

## Slice

- Ein Slice in redux enthält die state Informationen und die reducers, also functions die den state verändern können.
- Mit der "createSlice" methode von reduxjs/toolkit kann man ganz einfach ein slice erstellen
- Dafür geben wir der methode ein object mit ein paar properties mit
- Darin können wir den namen des Slices mit der "name" property bestimmen oder den Initialwert des slices mit der "initialState" property festlegen.

```js
const modalSlice = createSlice({
  name: "modal",
  initialState: { value: null },
  reducers: {
    showModal: (state, action) => {
      state.value = action.payload
    },
    closeModal: (state) => {
      state.value = null
    },
  },
})
```

## Reducers im Slice

- Reducers in einem slice sind functions die den state manipulieren können.
- Ähnlich wie setter functions vom useState hook, kann man mit reducer functions den state verändern
- Man hat aber noch Zugriff auf ein action object, das heißt wir können der reducer function ein argument mitgeben um den state zu verändern.
- Wenn man jetzt einen key im reducers object innerhalb des slices definiert, also eine function erstellt, wird ein action type und ein action creator erstellt.
- Action types sind strings, sie bestehen aus der "name" property vom slice und den keys von der reducers property

```js
{
  type: "modal/showModal"
}
```

- Action creators sind functions die action objects erstellen und wiedergeben, action creators an sich ändern den state nicht, sie beinhalten aber die informationen die der reducer braucht um den state zu verändern.

```js
showModal("some payload")
```

- Dieser action creator würde ein object wiedergeben das so aussieht:

```js
{ type: "modal/showModal", payload: "some payload" }
```

- Wenn du also in deiner Komponente die dispatch methode aufrufst, dann rufst du nicht die reducer function direkt auf, sondern du versendest ein action object, an den redux store, das durch den action creator erstellt wird, dieses object hat eine "type" und eine optionale "payload" property, der root reducer, also dein store, schaut dann wie der type aufgebaut ist, bzw. schaut auf den prefix des types, also den namen des slices und weißt dann auch wo das action object landen soll. Im richtigen slice wird dann die entsprechende reducer function ausgeführt, also der key name nach dem prefix ("modal/showModal")

- Action Creators geben also actions wieder und reducers handhaben diese actions.

## useSelector Hook

- Mit dem useSelector Hook können wir auf die states in unserem store zugreifen.
- Als argument geben wir dem hook eine arrow function die den gesamten state aufnimmt und den gewünschten state wiedergibt
- Den return Wert speichern wir in eine Variable

```js
const modal = useSelector((state) => state.modal.value)
```

## useDispatch Hook

- Mit dem useDispatch Hook können wir actions zum redux store versenden um state zu verändern.
- Actions bekommen wir, wenn wir action creators aufrufen, das gewonnene action object geben wir der dispatch function dann als argument mit.
- Mit dispatch wird dieses dann dem redux store geschickt.
- Der redux store gibt dann, je nach action type value, dem richtigen slice reducer die action weiter und der entsprechende reducer im slice wird dann ausgeführt.

```js
const dispatch = useDispatch()
dispatch(showModal("some payload"))
```
