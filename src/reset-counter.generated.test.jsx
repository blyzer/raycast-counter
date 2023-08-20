import { LocalStorage, launchCommand, LaunchType } from "@raycast/api";
import Command from "./reset-counter";

jest.mock("@raycast/api");

describe('Command', () => {
  it('should expose a function', () => {
		expect(Command).toBeDefined();
	});
  
  it('Command should return expected output', async () => {
    // const retValue = await Command();
    expect(false).toBeTruthy();
  });
});