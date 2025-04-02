

type FormProps = {
    name: string
    organizationName: string
    phoneNumber: string
}

const postForm = async (values: FormProps) => {
    return await fetch(`${process.env.NEXT_PUBLIC_URL}/api/RequestCall/v2`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(values),
    })
}

type CallbackProps = {
    phoneNumber: string
}

const postCallback = async (value: CallbackProps) => {
    return await fetch(`${process.env.NEXT_PUBLIC_URL}/api/RequestCall/v3`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(value),
    })
}

export {
    postForm,
    postCallback,
}