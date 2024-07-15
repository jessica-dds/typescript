// Exclude<unionType, excludedMembers>
// Extract <type, union>


type Ex1 = Exclude<'a' | 'b' | 'c', 'a'>;
type Ex2 = Extract<'a' | 'b' | 'c', 'a'>;
type Ex3 = Extract<'a' | 'b' | 'c', 'a' | 'z'>;
type Ex4 = Exclude<boolean | string | number, number>;
type Ex5 = Extract<number | number[], number>;






