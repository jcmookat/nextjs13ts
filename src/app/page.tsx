import Link from 'next/link'
import FormPost from './Form'

async function getPosts() {
	const res = await fetch(`${process.env.BASE_URL}/api/getPosts`)
	if (!res.ok) {
		console.log(res)
	}
	return res.json()
}

export default async function Home() {
	const data: { id: number; title: string }[] = await getPosts()

	return (
		<main className='py-6 px-48'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<Link
				className='bg-teal-500 text-black font-medium py-2 px-4 rounded'
				href='http://google.com'>
				Link
			</Link>
			<FormPost />
			{data.map((post) => (
				<h1>{post.title}</h1>
			))}
		</main>
	)
}
