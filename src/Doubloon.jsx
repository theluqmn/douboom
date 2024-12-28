import { createSignal, createEffect } from 'solid-js'

export default function Doubloon() {
    const [doubloonData, setDoubloonData] = createSignal({
        doubloons: 0,
        rank: 0
    })

    createEffect(() => {
        const fetchDoubloonData = async () => {
            try {
                const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://doubloons.cyteon.hackclub.app/api/v1/search?username=theluqmn')
                const response = await fetch(proxyUrl)
                const result = await response.json()
                const data = JSON.parse(result.contents)
                console.log(data)
                
                setDoubloonData({
                    doubloons: data.users[0].current_doubloons,
                    rank: data.users[0].rank
                })
            } catch (error) {
                console.log('Error fetching doubloon data:', error)
            }
        }

        fetchDoubloonData()
    })

    return (
        <div class="pt-16 grid grid-cols-2 md:grid-cols-3">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl text-white">
                    Doubloons
                </h1>
                <p class="text-4xl text-[rgb(241,196,15)]">
                    {doubloonData().doubloons}
                </p>
            </div>

            <div class="flex flex-col gap-2">
                <h1 class="text-2xl text-white">
                    Rank
                </h1>
                <p class="text-4xl text-[rgb(241,196,15)]">
                    No. {doubloonData().rank}
                </p>
            </div>

            <div class="flex flex-col gap-2">
                <h2 class="text-gray-100 text-xl">
                    Doubloon goal: 3,000
                </h2>

                <h2 class="text-gray-100 text-xl">
                    Rank goal: Top 10
                </h2>
            </div>
        </div>
    )
}
