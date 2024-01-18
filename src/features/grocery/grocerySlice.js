import { createSlice } from "@reduxjs/toolkit";

const grocerySlice = createSlice({
    name:"grocerys",
    initialState:{
        allGrocerys :[],
        edit:{allGrocery:{} , isEdit:false}
    },
    reducers:{

        // Remove grocery list

        remove:(state,action) => {
            return{
                ...state,
                allGrocerys:state.allGrocerys.filter(allGrocery => allGrocery.id !== action.payload)
            }
        },

        // Add grocery list

        add:(state,action) => {
            return {
                ...state,
                allGrocerys:[action.payload , ...state.allGrocerys]
            }
        },

        // Edit grocery list

        edit:(state, action) => {
           return{
            ...state,
            edit:{ allGrocery : action.payload , isEdit:true}
           }
        },

        // Update grocery list

        update :(state , action) => {
            return{
                ...state,
                allGrocerys: state.allGrocerys.map((item) => item.id === action.payload.id ? {...item , text:action.payload.text } : item),
                 edit:{allGrocery:{} , isEdit:false}
            }
        },

        // clear All Grocery list

        clearAll:(state , action) => {
            return{
              ...state,
              allGrocerys:[]
            }
            }
    }
})

export const {add , remove , edit , update , clearAll} = grocerySlice.actions
export default grocerySlice.reducer