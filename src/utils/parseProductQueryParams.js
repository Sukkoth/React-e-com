const parseProductQueryParams = (queryParam = {}) => {
    let parsedString = '';
    Object.keys(queryParam).forEach((queryKey) => {
        if (queryKey === 'page') {
            return (parsedString += `page=${queryParam[queryKey]}&`);
        }
        if (queryKey === 'limit') {
            return (parsedString += `limit=${queryParam[queryKey]}`);
        }
        if (queryKey === 'categories') {
            return queryParam[queryKey].length > 0
                ? (parsedString +=
                      '&' + `category[in]=${queryParam[queryKey].join(',')}`)
                : '';
        }
    });
    return parsedString;
};

export default parseProductQueryParams;
