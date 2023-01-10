export declare class SSVScannerCommand {
    protected DAY: number;
    protected WEEK: number;
    protected MONTH: number;
    protected eventsList: string[];
    private params;
    constructor(params_: any);
    execute(): Promise<any>;
    getClusterSnapshot(range: any, toBlock: any): Promise<any>;
}
