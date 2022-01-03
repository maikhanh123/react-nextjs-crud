import { useEffect, useState } from "react";

function useGeneralizedCrudMethods(initialData, delayMs = 1000) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      try {
        setData(initialData);
      } catch (e) {
        setError(e);
      }
    }
    getData();
  }, [initialData, delayMs]);

  function createRecord(createObject) {
    async function addData() {
      await new Promise((resolve) => {
        setTimeout(resolve, delayMs);
      });
      setData((oriState) => {
        return [...oriState, createObject];
      });
    }
    addData();
  }

  function updateRecord(id, updateObject) {
    async function updateData() {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      setData((oriState) => {
        const dataRecord = oriState.find((rec) => rec.id === id);
        // console.log("Object.entries(updateObject)", Object.entries(updateObject));
        for (const [key, value] of Object.entries(updateObject)) {
          dataRecord[key] = value === undefined ? dataRecord[key] : value;
        }
        // replace just the record updated leaving the others the same
        return oriState.map(function (rec) {
          return rec.id === id ? dataRecord : rec;
        });
      });
    }
    updateData();
  }

  function deleteRecord(id) {
    async function deleteData() {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      setData((oriState) => {
        return oriState.filter((rec) => rec.id !== id);
      });
    }
    deleteData();
  }

  return { data, error, createRecord, updateRecord, deleteRecord };
}

export default useGeneralizedCrudMethods;
