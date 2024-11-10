function isPalindrome (word) {

    // conditional if to avaluate the constants

    // return false fro  an empty string
    if (word === '') return false;

    const myWord = word.toLowerCase (); //return string to niormal case

    const reversedword  = myWord.split ('').reverse().join ('') ;

    return myWord === reversedword;

}

export default isPalindrome;