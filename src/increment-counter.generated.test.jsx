import { updateCommandMetadata } from "@raycast/api";
import { LocalStorage, launchCommand, LaunchType } from "@raycast/api";
import Command from "./increment-counter";

jest.mock("@raycast/api");
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