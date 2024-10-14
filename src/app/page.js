import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default async function Home() {
  let Quotes = await fetch('https://dummyjson.com/quotes/random',{cache: "no-cache"})
  Quotes = await Quotes.json()
  return (
    <div className='flex justify-center items-center p-26 min-h-screen bg-slate-900'>
    <Card className="w-[400px] text-center bg-slate-800">
    <CardHeader>
      <CardTitle className='text-3xl font-bold  text-slate-100'>Quote</CardTitle>
      <CardDescription className='text-3xl p-8 text-slate-100'>{Quotes.quote}</CardDescription>
      <CardDescription className='text-xl p-3  text-slate-100' >Quote By : <span className='underline text-2xl font-semibold'>{Quotes.author}</span></CardDescription>
    </CardHeader>
    <CardContent>

    </CardContent>
    <CardFooter className="flex justify-between">
    </CardFooter>
  </Card>
  </div>
  )
}
