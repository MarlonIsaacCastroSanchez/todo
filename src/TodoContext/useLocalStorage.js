import React from "react";
function useStorageTodos(itemName, initialValue) {
    const [error, setError]= React.useState(false)
    const [loading, setLoading]= React.useState(true)
    const [item, setitems] = React.useState(initialValue)
    React.useEffect(()=>{
      setTimeout(()=>{
       try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setitems(parsedItem);
        setLoading(false)
       } catch (error) {
        setError(error)
       }
      }, 1000)
    }, [])
    const sabeitems = (newitems) => {
      try {
        const stringifieditems = JSON.stringify(newitems)
      localStorage.setItem(itemName, stringifieditems)
      setitems(newitems)
      } catch (error) {
        setError(error)
      }
    }
    return{
      item,
      sabeitems,
      loading,
      error,
  }
  }
  export {useStorageTodos}