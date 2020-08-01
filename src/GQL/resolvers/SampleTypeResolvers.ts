const sampleTypeResolvers = {
  Query: {
    hello: () => "hello",
  },

  Mutation: {
    createCat: (_: any, { name }: { name: String }) => {
      return { id: 0, name, type: "Cat" };
    },
  },
};

export default sampleTypeResolvers;
