export default function App() {
    return (
        <div class>
            <header
            class="p-2 bg-[rgb(241,196,15)] items-center flex flex-col fixed z-10 w-full duration-500">
                <div class="lg:w-7/12 flex flex-row items-center gap-2">
                    <h1 class="text-2xl text-black hover:font-bold duration-500">
                        Douboom
                    </h1>
                </div>
            </header>

            <div class="pt-32 p-4 md:p-4 md:pt-32 lg:w-7/12 items-center mx-auto space-y-3 text-sm lg:text-base">
                <p class="text-[rgb(235,235,235)] text-base">
                    I joined Hack Seas 2024/2025 on 26th December 2024 - roughly one month later compared
                    to the other participants. Despite the late start, I am confident and ready to make the most
                    of this opportunity and prove my competence.
                </p>

                <div class="pt-16 flex flex-col gap-2">
                    <h1 class="text-[rgb(241,196,15)] text-3xl">
                        Items to redeem before 31st January 2025
                    </h1>

                    <h2 class="text-gray-100 text-xl">
                        Doubloon goal: 3,000
                    </h2>

                    <h2 class="text-gray-100 text-xl">
                        Rank goal: Top 10
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card title="Hack Club MicroSD Card" doubloons="32" image="https://noras-secret-cdn.hackclub.dev/shop/microsd.png/" />
                    <Card title="GitHub Invertocat Pin" doubloons="76" image="https://noras-secret-cdn.hackclub.dev/shop/gh_invertocat_pin.png" />
                    <Card title="Blåhaj" doubloons="123" image="https://noras-secret-cdn.hackclub.dev/shop/blahaj.png" />
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <div class="p-4 rounded-md bg-[rgb(247,220,111)] flex flex-col items-center gap-2 hover:bg-[rgb(244,208,63)] duration-500">
            <h1 class="text-2xl text-black font-semibold">
                {props.title}
            </h1>

            <img src={props.image} alt="Doubloon" class="w-32 h-32 object-contain hover:scale-105 duration-700" />
            
            <div class="p-2 rounded-md bg-black text-white hover:bg-white hover:text-black duration-500">
                <p class="text-center">
                    {props.doubloons} Doubloons
                </p>
            </div>
        </div>
    )
}