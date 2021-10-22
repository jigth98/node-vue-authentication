import client from '../lib/client'

export async function goToHomepage() : Promise<any>  {
    const home = await client.get("home")
    return home
}

