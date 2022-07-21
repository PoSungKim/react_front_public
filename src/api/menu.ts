export const getMenu = async () => {
    const response = await fetch("/api/menu", {
        method: 'get',
        headers: {
          "Content-Type": "application/json",
        },
      });

    const json = await response.json();
    const data = await json.data;

    return data;
}