import { createContext } from "react";
const initialState = {
    first: 'Jack',
    last: 'Doe',
}
export type UserState = typeof initialState;

const Usercontext = createContext<typeof initialState>(initialState)
export default Usercontext
// Language: typescript
// Path: src/context.tsx
// Compare this snippet from src/UseContextComponent.tsx:
// import React, { useContext } from 'react'
