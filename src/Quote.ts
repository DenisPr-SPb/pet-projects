class Quote {
  private readonly id: string;
  private readonly text: string;
  private readonly author: string;
  private isFavorite: boolean;

  constructor(id,text,author) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.isFavorite = false;
  }
}

export default Quote;