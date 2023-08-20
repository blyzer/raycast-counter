import { updateCommandMetadata } from "@raycast/api";
import { LocalStorage, launchCommand, LaunchType } from "@raycast/api";
import Command from "./decrement-counter";

jest.mock("@raycast/api");
jest.mock("@raycast/api");

describe('Command', () => {
  const initialCounterValue = 49;
  it('should expose a function', () => {
		expect(Command).toBeDefined();
	});
  
  it('Command should return expected output', async () => {
    await LocalStorage.setItem("counter", initialCounterValue);
    // const retValue = await Command();
    expect(false).toBeTruthy();
  });
});