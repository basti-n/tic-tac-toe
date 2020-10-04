const { Router } = require('express');
const resultController = require('../controllers/resultController');

const router = Router();

/**
 * @swagger
 * definitions:
 *    Gametable:
 *      type: object
 *      required:
 *          - game
 *          - completed
 *      properties:
 *          game:
 *           type: object
 *           schema:
 *            $ref: '#/definitions/Game'
 *           description: The games current play-state
 *          winner:
 *           type: string
 *           nullable: true
 *           description: Indicates the winner of the game
 *          completed:
 *           type: boolean
 *           description: Indicated whether the game is completed
 *      example:
 *          game: {1: {value: 'x', id: '123'}, 2: {value: 'x', id: '234'}, 3: {value: 'x', id: '345'}, 4: {value: 'x', id: '456'}, 5: {value: 'x', id: '567'}, 6: {value: 'x', id: '678'}, 7: {value: 'x', id: '789'}, 8: {value: 'x', id: '890'}}
 *          winner: 'o'
 *          completed: true
 *
 *    Game:
 *      type: object
 *      required:
 *          - id
 *      properties:
 *         id:
 *          type: object
 *          description: TicTacToe Cell
 *          schema:
 *           $ref: '#/definitions/Cell'
 *
 *    Cell:
 *      type: object
 *      required:
 *        - value
 *        - id
 *      properties:
 *         id:
 *          type: string
 *          description: identifier of the cell
 *         value:
 *          type: string
 *          nullable: true
 *          description: value of the cell
 */

/**
 * @swagger
 * /result:
 *  post:
 *      summary: Play the Tic Tac Toe Game
 *      description: Post Changes to the game of Tic Tac Toe and returns the current game table
 *      tags: [Gametable]
 *      responses:
 *        '200':
 *          description: Step succesfully added.
 *          schema:
 *             $ref: '#/definitions/Gametable'
 *        '400':
 *          description: Error adding step.
 *          content:
 *              application/json:
 *               type: string
 */
router.post('/', resultController.post_result);

module.exports = router;
