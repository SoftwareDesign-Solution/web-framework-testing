/*
 * https://gist.github.com/codeguy/6684588?permalink_comment_id=4030834#gistcomment-4030834
 */
export default function slug (str: string) {
    return str
        .normalize('NFKD')
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/[-\s]+/g, '-');
};