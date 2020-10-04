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
 *           type: array
 *           items:
 *            $ref: '#/definitions/Cell'
 *           description: The games current play-state
 *          winner:
 *           type: string
 *           nullable: true
 *           description: Indicates the winner of the game
 *          completed:
 *           type: boolean
 *           description: Indicated whether the game is completed
 *      example:
 *          game: [{ value: 'x', id: 'ttt_1' }, { value: null, id: 'ttt_2' },{ value: 'o', id: 'ttt_3' },{ value: null, id: 'ttt_4' },{ value: null, id: 'ttt_5' },{ value: 'x', id: 'ttt_6' },{ value: 'x', id: 'ttt_7' },{ value: null, id: 'ttt_8' },{ value: null, id: 'ttt_9' }]
 *          winner: 'o'
 *          completed: true
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
 *      example: { value: 'x', id: 'ttt_6' }
 */

/**
 * @swagger
 * /result:
 *  post:
 *      summary: Play the Tic Tac Toe Game
 *      description: Post Changes to the game of Tic Tac Toe and returns the current game table
 *      tags: [TicTacToe]
 *      parameters:
 *        - in: body
 *          description: The cells to update.
 *          schema:
 *           type: array
 *           items:
 *            $ref: '#/definitions/Cell'
 *
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

/**
 * @swagger
 * /result/restart:
 *  post:
 *      summary: Restart the Tic Tac Toe Game
 *      description: Restarts a game of Tic Tac Toe
 *      tags: [TicTacToe]
 *      responses:
 *        '201':
 *          description: Restart successful.
 *          schema:
 *             $ref: '#/definitions/Gametable'
 *        '400':
 *          description: Error restarting game.
 *          content:
 *              application/json:
 *               type: string
 */
router.post('/restart', resultController.post_restart);

module.exports = router;
