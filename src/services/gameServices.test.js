import * as gameService from "./gameServices.js"

describe("Game service", () => {
  test("should put camels from hand to herd", () => {
    // TODO
    let game = {
      _players : [
      { hand: ["camel"], camelsCount: 0, score: 0 },
      { hand: ["camel","gold","camel","camel"], camelsCount: 0, score: 0 },
    ]}
    gameService.putCamelsFromHandToHerd(game);
    expect(game._players[0].camelsCount).toBe(1);
    expect(game._players[0].hand.length).toBe(0);
    expect(game._players[0].hand).toStrictEqual([]);

    expect(game._players[1].camelsCount).toBe(3);
    expect(game._players[1].hand.length).toBe(1);
    expect(game._players[1].hand).toStrictEqual(["gold"]);
  
  })

  test("should draw cards 1 card", () => {
    let deck = ["gold","gold","gold"]
    let dr =gameService.drawCards(deck,1);
    expect(dr).toEqual(["gold"]);
    expect(deck).toEqual(["gold","gold"]);
  })

  test("should init a deck", () => {
    let deck = gameService.initDeck();
    expect(deck.length).toBe(52);
    expect(deck.filter(card => card === "diamond").length).toBe(6);
  })
})