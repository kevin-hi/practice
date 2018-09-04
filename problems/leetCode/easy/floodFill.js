/*
    An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

    Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

    To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

    At the end, return the modified image.

    Example 1:
    Input:
    image = [[1,1,1],[1,1,0],[1,0,1]]
    sr = 1, sc = 1, newColor = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]
    Explanation:
    From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
    by a path of the same color as the starting pixel are colored with the new color.
    Note the bottom corner is not colored 2, because it is not 4-directionally connected
    to the starting pixel.
    Note:

    The length of image and image[0] will be in the range [1, 50].
    The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
    The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFillOLd = function(image, sr, sc, newColor) {

    const image2 = [];

    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image.length; j++) {
            if (!image2[i]) image2[i] = [];
            image2[i][j] = image[i][j]
        }
    }

    console.log(image2);


    const origColor = image2[sr][sc];

    function crawl(x, y) {
        if (image2[x][y] !== undefined || image[x][y] === newColor) return;
        image[x][y] = newColor;

        const UP = image2[x - 1] && image2[x - 1][y];
        const DOWN = image2[x + 1] && image2[x + 1][y];
        const LEFT = image2[x][y - 1];
        const RIGHT = image2[x][y + 1];

        if (UP && UP === origColor) crawl(x - 1, y);
        if (DOWN && DOWN === origColor) crawl(x + 1, y);
        if (LEFT && LEFT === origColor) crawl(x, y - 1);
        if (RIGHT && RIGHT === origColor) crawl(x, y + 1);
    }

    crawl(sr, sc);
    return image;
};

const floodFillDFS = (image, sr, sc, newColor) => {

    const color = image[sr][sc];
    const search = (r, c) => {
        //If current does not equal original color, returns out.
        if (image[r][c] !== color) return;
        image[r][c] = newColor;

        //DOWN
        if (r >= 1) search(r - 1, c);
        //UP
        if (r + 1 < image.length) search(r + 1, c);
        //LEFT
        if (c >= 1) search(r, c - 1);
        //RIGHT
        if (c + 1 < image[0].length) search(r, c + 1);
    };

    if (color !== newColor) search(sr, sc);
    return image;
};

console.log(floodFillDFS([
        [1,1,1],
        [1,1,0],
        [1,0,1]],
    1, 1, 2));