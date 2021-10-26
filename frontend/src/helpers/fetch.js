const baseUrl = process.env.REACT_APP_API_URL;

<<<<<<< HEAD
export const fetchSinToken = async (endpoint, data, method = "GET") => {
    const url = `${baseUrl}/${endpoint}`;

    if (method === "GET") {
        const resp = await fetch(url);
        return await resp.jason();
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await resp.json();
    }
};
=======
export const fetchSinToken = async( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'GET' ) {
        const resp = await fetch( url );
        return await resp.json();
    } else {
        const resp = await fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })

        return await resp.json();
    }

}


export const fetchConToken = async( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ) {
        const resp = await fetch( url, {
            headers: {
                'x-token': token
            }
        });
        return await resp.json();
    } else {
        const resp = await fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        })

        return await resp.json();
    }

}

>>>>>>> bb12df48712cd96f5ef3d07dca27137edf7f61ae
