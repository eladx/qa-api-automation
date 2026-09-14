const BASE_URL = "https://jsonplaceholder.typicode.com";

const HEADERS = {
    "Content-Type": "application/json",
};
/*
export async function getUser(userId) {
    const response = await fetch(
        `${BASE_URL}/users/${userId}`, 
        {
            method: "GET",
        }
    )

    const data = await response.json()

    if (response.status === 200) {
        return {
            status: response.status,
            username: data.username,
            email: data.email
        };
    } else {
        return {
            status: response.status,
            data: data
        };
    }
}


export async function createUser(username, email) {

    const response = await fetch(
        `${BASE_URL}/users/`, 
        {
            method: "POST",

            headers: HEADERS,

            body: JSON.stringify({
                username: username,
                email: email
            })

        }     
    )

    const data = await response.json()

    return {
        status: response.status,
        username: data.username,
        email: data.email
    }
        
}

export async function updateUser(userId, username, email) {

    const response = await fetch(
        `${BASE_URL}/users/${userId}`, 
        {
            method: "PUT",
            headers: HEADERS,
            body: JSON.stringify({
                username: username,
                email: email
            })
        }     
    )

    const data = await response.json()

    return {
        status: response.status,
        username: data.username,
        email: data.email
    }
}

export async function patchUser(userId, email) {

    const response = await fetch(
        `${BASE_URL}/users/${userId}`, 
        {
            method: "PATCH",
            headers: HEADERS,
            body: JSON.stringify({
                email: email
            })
        }
    )

    const data = await response.json()

    return {
        status: response.status,
        email: data.email
    }
}

export async function deleteUser(userId) {
    const response = await fetch(
        `${BASE_URL}/users/${userId}`, 
        {
            method: "DELETE",
        }
    )

    return {
        status: response.status
    }
}
*/
export async function request(url, method, body = null) {
    try {
            const options = {
            method,
            headers: HEADERS,
        }

        if (body !== null) {
            options.body = JSON.stringify(body)
        }

        const response = await fetch(url, options)

        const data = await response.json()

        return {
            status: response.status,
            data: data
        }
    } catch (error) {
        throw error
    }
}

export async function createUser(username, email) {
    const response = await request(
        `${BASE_URL}/users`,
        "POST",
        {
            username: username,
            email: email
        }
    );

    return {
        status: response.status,
        username: response.data.username,
        email: response.data.email
    }
}

export async function updateUser(userId, username, email) {
    const response = await request(
        `${BASE_URL}/users/${userId}`,
        "PUT",
        {
            username: username,
            email: email
        }
    )

    return {
        status: response.status,
        username: response.data.username,
        email: response.data.email
    }
}

export async function patchUser(userId, email) {
    const response = await request(
        `${BASE_URL}/users/${userId}`,
        "PATCH",
        {
            email: email
        }
    )

    return {
        status: response.status,
        email: response.data.email
    }
}

export async function deleteUser(userId) {
    const response = await request(
        `${BASE_URL}/users/${userId}`,
        "DELETE"
    )

    return {
        status: response.status
    }
}

export async function getUser(userId) {
    const response = await request(
        `${BASE_URL}/users/${userId}`,
        "GET"
    )

    if (response.status === 200) {
        return {
            status: response.status,
            username: response.data.username,
            email: response.data.email
        }
    } else {
        return {
            status: response.status,
            data: response.data
        }
    }
}