import { BuyButton } from "../BuyButton/BuyButton";

export function FeaturedSingleImage() {
    return (
        <section className="pt-9">
            <div className="flex  items-center justify-between">
                <h1 className="text-2xl">Samurai King Resting</h1>
                <BuyButton />
            </div>

            <div className="w-full bg-slate-600 h-72 mt-1 flex  h-96">

                
                <img src="https://i.imgur.com/1KJ5PiF.jpg" alt="" className="mx-auto"/>


                <div className="bg-slate-500 h-9 p-7 flex items-center justify-between absolute mt-80">
                    PHOTO OF THE DAY
                </div>


            </div>


        </section>
    )
}