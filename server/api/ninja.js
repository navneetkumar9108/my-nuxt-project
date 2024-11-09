export default defineEventHandler(async (event)=>{
    // const { name } = getQuery(event)

    // const { age }  = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_eESZPW4xyvWXFRmekY0pMvXZzGAe5qyh9GndOfI1')

    // return {
    //     message: `hello, ${name}! you are ${age} year old.`
    // }

    return data
})