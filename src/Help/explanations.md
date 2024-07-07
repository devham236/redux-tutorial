## Grobe Vorgehensweise von Redux bzw. reduxjs/toolkit in React Applikationen

- Store erstellen, enthält alle Slices
- Slice erstellen, enthält State und die Actions
- State und Actions in Komponenten importieren und verwenden

## Einzelne Elemente im Detail

# Store

- Der Store enthält all deine Slices bzw. den gesamten state deiner Applikation
- Diesen store geben wir der Provider Komponente, die wir von react-redux importieren, als Property mit und legen unsere App innerhalb der Provider Komponente.
- Mithilfe der Context API von React können wir so, überall in unserer App auf den store zugreifen.

# Reducer Property im Store

- Um einen store zu erstellen, können wir die "configureStore" function von reduxjs/toolkit benutzen
- Dieser geben wir ein object mit einer "reducer" property.
- Dieses reducer object enthält key value pairs, wo der key zum slice zeigt und der value die reducer function vom state ist.

# Slice

- Ein Slice in redux enthält die state Informationen und die reducers, also functions die den state verändern können.
- Mit der "createSlice" methode von reduxjs/toolkit kann man ganz einfach ein slice erstellen
- Dafür geben wir der methode ein object mit ein paar properties mit
- Darin können wir den namen des Slices mit der "name" property bestimmen oder den Initialwert des slices mit der "initialState" property festlegen.

# Reducers im Slice

- Reducers in einem slice sind functions die den state manipulieren können.
- Ähnlich wie setter functions vom useState hook, kann man mit reducer functions den state verändern
- Man hat aber noch Zugriff auf ein action object, das heißt wir können der reducer function ein argument mitgeben um den state zu verändern.
- Wenn man jetzt einen key im reducers object innerhalb des slices definiert, also eine function erstellt, wird ein action type und ein action creator erstellt.

- Action types sind strings und sehen so aus => "modal/showModal", sie bestehen aus der "name" property vom slice und den keys von der reducers property

- Action creators sind functions die action objects erstellen und wiedergeben, action creators an sich ändern den state nicht, sie beinhalten aber die informationen die der reducer braucht um den state zu verändern.

- "showModal("some payload")" ist zum Beispiel ein action creator der von der createSlice methode erstellt wurde, dieser action creator würde ein object wiedergeben das so aussieht: {type: "modal/showModal", payload: "some payload"}

- Wenn du also in deiner Komponente die dispatch methode aufrufst, dann rufst du nicht die reducer function direkt auf, sondern du versendest ein action object das durch den action creator erstellt wird, dieses object hat eine "type" und eine optionale "payload" property, der root reducer also dein store schaut dann wie der type aufgebaut ist, bzw. schaut auf den prefix des types, also den namen des slices und weißt dann auch wo das action object landen soll. Im richtigen slice wird dann die entsprechende reducer function ausgelöst, also der key name nach dem prefix ("modal/shwoModal")

- Actions werden also von reducern abgefangen.
