## Redux Explained

# Store

- Enthät alle States die für alle Komponenten global verfügbar sind

# Reducer

- Ist eine function die den Wert eines states und eine Art "action" aufnimmt, um dann den neuen Zustand eines States wiederzugeben.

# useSelector

- "Accessing" bzw. states auswählen/importieren

# useDispatch

- "Manipulate" bzw. states ändern/updaten.

# Anleitung

- Store erstellen (am besten in der "main" Datei)
- Slices in einer seperaten Datei erstellen
- Den reducer und die actions vom slice exportieren
- Reducer da importieren wo der Store liegt
- Actions in die Komponenten importieren, wo sie gebraucht werden.
