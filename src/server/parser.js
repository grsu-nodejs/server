/**
 * Created by andrew on 3/30/2016.
 */

function getArticle($, paragraphs) {
    $('.itemtext p').each(function () {
        var textblock = $(this).text();
        var blockquote = $(this).parent()[0].name == 'blockquote';
        var imgsrc = $(this).find('img').attr('src');
        paragraphs.push({
            quote: blockquote,
            text: textblock,
            imgsrc: imgsrc
        });
    });
}

function getEntries($, entries) {
    $('.entry').each(function () {
        var data = $(this);
        var title = data.find('a[rel=bookmark]').text();
        var href = data.find('a[rel=bookmark]').attr('href');
        var id = href.substring(href.lastIndexOf('/'));
        var text = data.children().first().next().find('p').text();
        var author = data.find('strong').text();
        var meta = data.find('p').text();
        var fullDate = meta.substring(meta.indexOf(author) + author.length + 2, meta.indexOf('Кейворды') - 1);
        var time = fullDate.substring(fullDate.indexOf(',') + 2);
        var date = fullDate.substring(0, fullDate.indexOf(','));

        entries.push({
            _id: id,
            author: author,
            date: date,
            time: time,
            title: title,
            text: text
        });
    });
}

exports.parseForParagraphs = getArticle;
exports.parseForEntries = getEntries;
