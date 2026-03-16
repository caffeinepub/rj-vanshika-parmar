import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  type Book = {
    id : Nat;
    title : Text;
    description : Text;
  };

  module Book {
    public func compare(book1 : Book, book2 : Book) : Order.Order {
      Text.compare(book1.title, book2.title);
    };
  };

  type CompanyInfo = {
    name : Text;
    description : Text;
  };

  var bio : Text = "RJ Vanshika Parmar is an author and founder of Night Rose Publications. She writes fiction and non-fiction books and helps new writers publish their work.";

  var companyInfo : CompanyInfo = {
    name = "Night Rose Publications";
    description = "A publishing company dedicated to supporting new authors and bringing diverse stories to readers.";
  };

  let books = Map.empty<Nat, Book>();
  var nextBookId = 1;

  public shared ({ caller }) func updateBio(newBio : Text) : async () {
    bio := newBio;
  };

  public shared ({ caller }) func updateCompanyInfo(name : Text, description : Text) : async () {
    companyInfo := {
      name;
      description;
    };
  };

  public shared ({ caller }) func addBook(title : Text, description : Text) : async () {
    let book : Book = {
      id = nextBookId;
      title;
      description;
    };
    books.add(nextBookId, book);
    nextBookId += 1;
  };

  public shared ({ caller }) func editBook(id : Nat, title : Text, description : Text) : async () {
    switch (books.get(id)) {
      case (null) { Runtime.trap("Book not found") };
      case (?_) {
        let updatedBook : Book = {
          id;
          title;
          description;
        };
        books.add(id, updatedBook);
      };
    };
  };

  public query ({ caller }) func getBio() : async Text {
    bio;
  };

  public query ({ caller }) func getCompanyInfo() : async CompanyInfo {
    companyInfo;
  };

  public query ({ caller }) func getAllBooks() : async [Book] {
    books.values().toArray().sort();
  };

  public query ({ caller }) func getBook(id : Nat) : async ?Book {
    books.get(id);
  };
};
