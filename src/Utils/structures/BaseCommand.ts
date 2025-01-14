import DiscordClient from "../../Client/Client";
import { CommandInteraction } from "discord.js";

export abstract class BaseCommand {
    constructor(private _name: string, private _description: string) {}

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    abstract run(client: DiscordClient, interaction: CommandInteraction): void;
}
