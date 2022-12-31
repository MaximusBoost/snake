const GAME_FIELD = document.querySelector('#game_field');
const TDS = document.getElementsByTagName('td'); // глобальный перебор всех ячеек
let modalWindowForRecordingResult
let modalWindowForConfirm
let modalWindowForRecordName
let modalWindowForTableRecord
let score = document.getElementById('score');
let $ = {};
let moveBottomSide, moveTopSide, moveLeftSide, moveRightSide;
