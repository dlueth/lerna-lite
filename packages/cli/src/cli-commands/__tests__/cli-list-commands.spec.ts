jest.mock('@qoopido/lerna.list', () => null);
import cliList from '../cli-list-commands';

describe('ListCommand CLI options', () => {
  it('should log a console error when ListCommand is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await cliList.handler(undefined as any);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('"@qoopido/lerna.list" is optional and was not found.'),
      expect.anything()
    );
  });
});
