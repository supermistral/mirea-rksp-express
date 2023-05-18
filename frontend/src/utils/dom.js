export const getNameAndValue = (target) => {
    const value = target.value;
    const name = target.name;

    return { name, value: value ? value : null };
}