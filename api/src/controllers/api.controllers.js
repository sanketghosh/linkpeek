import axios from "axios"
import cheerio from "cheerio"

export const getLinksHandler = async (req, res) => {
    const { url } = req.query;

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const title = $('title').text();
        const description = $('meta[name=description]').attr('content');
        const image = $('meta[property="og:image"]').attr('content');

        res.json({ title, description, image });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch preview data' });
    }
}