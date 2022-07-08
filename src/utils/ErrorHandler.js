const handleError = async (response, setError) => {
    if (!response.ok) {
        const data = await response.json()
        setError(response.status + ' - ' + data.message)
        return false
    }
    return true
}

export default handleError