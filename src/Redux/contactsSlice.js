import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';


const initialState = []

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action)  {
            state.push(action.payload)
            },
            prepare(userName, number) { 
                return { 
                    payload: {
                        id: nanoid(),
                         name: userName,
                        number: number,
                    }     
    }
            }
        },
        
        
        deleteContact: (state, action) => {
            const contactIdx = state.findIndex(contact => contact.id === action.payload);
            state.splice(contactIdx, 1);

        },
        
    }
})
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;