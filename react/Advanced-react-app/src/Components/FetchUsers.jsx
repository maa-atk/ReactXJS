import React, { useEffect, useState } from "react";

const FetchUsers = () => {
  const url = "https://api.github.com/users";

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getData = async () => {
    try {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading ||
        data.map((item) => {
          console.log(item);
          const { avatar_url, type, login } = item;
          return (
            <>
              <img src={avatar_url}></img>
              <div>{login}</div>
            </>
          );
        })}
    </div>
  );
};

export default FetchUsers;
