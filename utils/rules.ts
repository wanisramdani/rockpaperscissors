import { Hand } from "../enums/Hand";

export function findWinner(player: Hand, computer:Hand, score: number): {winner: string, score: number} {
    if (player === computer) {
        return {
            winner: 'Tie',
            score: score
        };
    } else if (player === Hand.Rock) {
        if (computer === Hand.Scissors) {
            return {
                winner: 'Player',
                score: editScore(score, 'Player')
            }
        } else {
            return {
                winner: 'Computer',
                score: editScore(score, 'Computer')
            };
        }
    } else if (player === Hand.Paper) {
        if (computer === Hand.Rock) {
            return {
                winner: 'Player',
                score: editScore(score, 'Player')
            };
        } else {
            return {
                winner: 'Computer',
                score: editScore(score, 'Computer')
            };
        }
    } else if (player === Hand.Scissors) {
        if (computer === Hand.Paper) {
            return {
                winner: 'Player',
                score: editScore(score, 'Player')
            };
        } else {
            return {
                winner: 'Computer',
                score: editScore(score, 'Computer')
            };
        }
    }
    return {
        winner: '',
        score: score
    };
}

function editScore(score: number, winner:string): number {
    if (winner === 'Player') {
        return score + 1;
    } else if (winner === 'Computer' && score > 0) {
        return score - 1;
    }
    return score;
}
