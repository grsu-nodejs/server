const cheerio = require('cheerio');

exports.parseParagraphs = data => {
    const $ = cheerio.load(data);

    return $('.itemtext p').map((index, element) => {
        let data = $(element);

        return {
            quote: !!data.closest('blockquote').length,
            text: data.text(),
            imgsrc: data.find('img').attr('src')
        };
    }).toArray();
};

exports.parseArticles = (data, date) => {
    const $ = cheerio.load(data);

    return $('.entry').map((index, element) => {
        let data = $(element);

        let time = data.find('.metadata').text().match(/.*,\s(.*)\sКейворды/)[1];
        return {
            _id: data.find('a[rel=bookmark]').attr('href').split('/').pop(),
            author: data.find('.metadata strong').text(),
            date: `${date.day}-${date.month}-${date.year} ${time}`,
            title: data.find('a[rel=bookmark]').text(),
            text: data.find('.itemtext p').text()
        };
    }).toArray();
};