import { Icons } from "@/Icons/Icons"

export const Contacts = () => {
    return (
        <div id="contacts" className="containerUz section">
            <h1 className="title">Contacts</h1>
            <p className="py-5">Want to know more or just chat? <br />
            You are welcome!</p>
            <button className="bg-black text-white font-gilroy-bold rounded-full px-6 py-3 max-[375px]:w-full">Send massage</button>
            <div className="flex items-center gap-x-16 justify-center pt-20 max-[375px]:pt-12 max-[375px]:gap-x-1 max-[375px]:justify-between">
                <Icons.linkedIn />
                <Icons.instagram />
                <Icons.behance />
                <Icons.dribble />
            </div>
            <p className="pt-10 text-grey">Like me on <br />
            LinkedIn, Instagram, Behance, Dribble</p>
        </div>
    )
}