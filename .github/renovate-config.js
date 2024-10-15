/**
 * It is recommended to not name it one of the repository configuration filenames listed in the Renovate Docs for Configuration Options.
 *
 * https://github.com/renovatebot/github-action?tab=readme-ov-file#configurationfile
 */

module.exports = {
    /** All branches created by Renovate will be prefixed with this branchPrefix */
    branchPrefix: "renovate/",
    /** This username MUST match the username of the bot account that the PAT was created for. This user is the account Renovate will use when making repository changes */
    username: "dylanclaywell",
    /** The gitAuthor specifies the author that will appear in the commit history */
    gitAuthor: "rasdgit Renovate Bot <rasdgit@iu.edu>",
    /** When running the Renovate action for the first time, this specifies that an onboarding PR be created to show what Renovate will provide initially */
    onboarding: true,
    /** The onboardingBranch specifies the branch that the onboarding PR will be created on */
    onboardingBranch: "renovate/configure",
    /** The platform specifies where Renovate is running */
    platform: "github",
    /** Repositories specifies which repos are watched for dependencies. */
    repositories: ["dylanclaywell/renovate-overrides-test"],
    /** Setting dependencyDashboard to true will create a persistent issue that acts as a dashboard to view the current state of the repo since the last time Renovate was run. */
    dependencyDashboard: true,
    /** Setting labels will add the given labels to any pull requests created by Renovate */
    labels: ["renovate"],
    hostRules: [
      {
        matchHostnames: ["github.com"],
        token: process.env.RENOVATE_TOKEN,
        hostType: "github",
      }
    ]
  }
