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

- Ein Slice in redux enthält die state Informationen und die reducers, die den state verändern können.
