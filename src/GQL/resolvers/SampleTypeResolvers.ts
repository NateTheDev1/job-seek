const sampleTypeResolvers = {
  Query: {
    hello: () => "hello",
    cats: () => [{ id: 0, name: "Nate", type: "Cat" }],
  },

  Mutation: {
    createCat: (_: any, { name }: { name: String }) => {
      return { id: 0, name, type: "Cat" };
    },
  },
};

export default sampleTypeResolvers;
