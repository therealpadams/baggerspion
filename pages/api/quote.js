import fs from 'fs'
import path from 'path'

export default (_req, res) => {
    const filePath = path.join(process.cwd(), 'data/testimonials.json')
	const rawData = fs.readFileSync(filePath)
	const testimonials = Array.from(JSON.parse(rawData)['testimonials'])
    const rn = Math.floor(Math.random() * testimonials.length)

    return res.status(200).json({
        quote: testimonials[rn]
    })
}