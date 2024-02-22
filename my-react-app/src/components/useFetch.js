import { useState, useEffect } from 'react';

function useFetch(url, optionsStr, inputTextCustom) {

  const [data, setData] = useState(null);
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(1);

  useEffect(() => {
    let success = true;

    const fetchData = async () => {
      setIsLoading(2);
      try {
        const options = JSON.parse(optionsStr);
        const response = await fetch(url, options);
        setStatus(response.status);
        const content = await response.json();
        console.log("The content is:", content)
        
        if (!response.ok) {
          throw new Error(`${response.status} ${content.error.message}`);
        } else {
          if (success) {
            setData(content);
            setIsLoading(3);
          }
        }
      } catch (error) {
        console.error(`${error}`);
        setData({ error: `${error}` });
        setIsLoading(3);
      }
    };
    if (inputTextCustom !== "") {
      fetchData();
    }
    return () => {
      success = false;
    };
  }, [url, optionsStr, inputTextCustom]);

  return { data, isLoading, status };
}

export default useFetch;