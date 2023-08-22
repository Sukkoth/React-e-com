const parseProductQueryParams = (queryParam = {}) => {
    let parsedString = '';
    Object.keys(queryParam).forEach((queryKey) => {
        if (queryKey === 'page') {
            return (parsedString += `page=${queryParam[queryKey]}&`);
        }
        if (queryKey === 'limit') {
            return (parsedString += `limit=${queryParam[queryKey]}`);
        }
    });
    return parsedString;
};

export default parseProductQueryParams;
