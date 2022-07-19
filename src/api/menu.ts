export const getMenu = async () => {
    const response = await fetch("http://localhost:8080/api/menu", {
        method: 'get',
        headers: {
          "Content-Type": "application/json",
        },
      });

    const json = await response.json();
    const data = await json.data;

    return data;
}