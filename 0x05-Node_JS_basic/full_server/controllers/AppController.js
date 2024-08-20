/**
 * Contains miscellaneous route handlers.
 * @author Wondwossen Hailu <https://github.com/WondwossenH9>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
